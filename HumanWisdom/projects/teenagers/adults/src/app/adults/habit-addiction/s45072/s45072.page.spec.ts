import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45072Page } from './s45072.page';

describe('S45072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45072Page;
  let fixture: ComponentFixture<S45072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
