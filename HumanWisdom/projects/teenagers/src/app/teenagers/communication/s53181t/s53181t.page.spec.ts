import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53181tPage } from './s53181t.page';

describe('S53181tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53181tPage;
  let fixture: ComponentFixture<S53181tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53181tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53181tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
