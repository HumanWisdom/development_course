import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62125Page } from './s62125.page';

describe('S62125Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62125Page;
  let fixture: ComponentFixture<S62125Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62125Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62125Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
