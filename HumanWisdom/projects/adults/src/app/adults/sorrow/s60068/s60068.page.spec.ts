import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60068Page } from './s60068.page';

describe('S60068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60068Page;
  let fixture: ComponentFixture<S60068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
