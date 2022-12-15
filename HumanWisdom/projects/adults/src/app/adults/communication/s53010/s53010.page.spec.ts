import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53010Page } from './s53010.page';

describe('S53010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53010Page;
  let fixture: ComponentFixture<S53010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
