import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45103Page } from './s45103.page';

describe('S45103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45103Page;
  let fixture: ComponentFixture<S45103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
