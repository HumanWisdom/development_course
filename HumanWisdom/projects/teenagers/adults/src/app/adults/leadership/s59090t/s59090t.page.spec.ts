import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59090tPage } from './s59090t.page';

describe('S59090tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59090tPage;
  let fixture: ComponentFixture<S59090tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59090tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59090tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
