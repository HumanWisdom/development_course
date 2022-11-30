import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62178Page } from './s62178.page';

describe('S62178Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62178Page;
  let fixture: ComponentFixture<S62178Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62178Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62178Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
