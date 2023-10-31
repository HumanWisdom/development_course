import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46053Page } from './s46053.page';

describe('S46053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46053Page;
  let fixture: ComponentFixture<S46053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
