import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73070Page } from './s73070.page';

describe('S73070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73070Page;
  let fixture: ComponentFixture<S73070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
