import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53099Page } from './s53099.page';

describe('S53099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53099Page;
  let fixture: ComponentFixture<S53099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
