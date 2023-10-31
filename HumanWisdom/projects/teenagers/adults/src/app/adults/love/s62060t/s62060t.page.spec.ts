import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62060tPage } from './s62060t.page';

describe('S62060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62060tPage;
  let fixture: ComponentFixture<S62060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
