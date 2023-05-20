import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117070Page } from './s117070.page';

describe('S117070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117070Page;
  let fixture: ComponentFixture<S117070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
