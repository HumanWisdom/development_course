import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134201Page } from './s134201.page';

describe('S134201Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134201Page;
  let fixture: ComponentFixture<S134201Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134201Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134201Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
