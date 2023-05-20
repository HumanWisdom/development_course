import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117029Page } from './s117029.page';

describe('S117029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117029Page;
  let fixture: ComponentFixture<S117029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
