import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134178Page } from './s134178.page';

describe('S134178Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134178Page;
  let fixture: ComponentFixture<S134178Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134178Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134178Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
