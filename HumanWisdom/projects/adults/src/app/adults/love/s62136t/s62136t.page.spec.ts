import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62136tPage } from './s62136t.page';

describe('S62136tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62136tPage;
  let fixture: ComponentFixture<S62136tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62136tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62136tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
