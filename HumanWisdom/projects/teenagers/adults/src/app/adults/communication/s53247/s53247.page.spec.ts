import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53247Page } from './s53247.page';

describe('S53247Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53247Page;
  let fixture: ComponentFixture<S53247Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53247Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53247Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
