import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117041tPage } from './s117041t.page';

describe('S117041tPage', () => {
  // let   
    let component:  S117041tPage;
  let fixture: ComponentFixture<S117041tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117041tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117041tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
