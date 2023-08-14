import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134194Page } from './s134194.page';

describe('S134194Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134194Page;
  let fixture: ComponentFixture<S134194Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134194Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134194Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
