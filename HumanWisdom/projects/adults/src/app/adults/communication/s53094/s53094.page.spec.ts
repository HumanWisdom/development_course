import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53094Page } from './s53094.page';

describe('S53094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53094Page;
  let fixture: ComponentFixture<S53094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
