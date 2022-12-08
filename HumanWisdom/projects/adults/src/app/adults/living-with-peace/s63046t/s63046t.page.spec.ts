import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63046tPage } from './s63046t.page';

describe('S63046tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63046tPage;
  let fixture: ComponentFixture<S63046tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63046tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63046tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
