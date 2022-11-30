import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53249Page } from './s53249.page';

describe('S53249Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53249Page;
  let fixture: ComponentFixture<S53249Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53249Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53249Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
