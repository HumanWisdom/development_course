import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59068tPage } from './s59068t.page';

describe('S59068tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59068tPage;
  let fixture: ComponentFixture<S59068tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59068tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59068tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
