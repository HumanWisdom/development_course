import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61076tPage } from './s61076t.page';

describe('S61076tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61076tPage;
  let fixture: ComponentFixture<S61076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
