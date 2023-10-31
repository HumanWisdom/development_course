import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62161Page } from './s62161.page';

describe('S62161Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62161Page;
  let fixture: ComponentFixture<S62161Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62161Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62161Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
