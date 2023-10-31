import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61072Page } from './s61072.page';

describe('S61072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61072Page;
  let fixture: ComponentFixture<S61072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
