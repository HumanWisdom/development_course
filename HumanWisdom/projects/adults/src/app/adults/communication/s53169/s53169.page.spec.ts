import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53169Page } from './s53169.page';

describe('S53169Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53169Page;
  let fixture: ComponentFixture<S53169Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53169Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53169Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
