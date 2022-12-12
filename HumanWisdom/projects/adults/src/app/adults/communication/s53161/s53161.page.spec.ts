import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53161Page } from './s53161.page';

describe('S53161Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53161Page;
  let fixture: ComponentFixture<S53161Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53161Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53161Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
