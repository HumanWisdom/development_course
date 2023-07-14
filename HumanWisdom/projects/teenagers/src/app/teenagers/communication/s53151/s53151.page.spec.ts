import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53151Page } from './s53151.page';

describe('S53151Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53151Page;
  let fixture: ComponentFixture<S53151Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53151Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53151Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
