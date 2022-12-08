import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45034Page } from './s45034.page';

describe('S45034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45034Page;
  let fixture: ComponentFixture<S45034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
