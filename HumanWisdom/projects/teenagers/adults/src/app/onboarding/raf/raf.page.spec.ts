import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RafPage } from './raf.page';

describe('RafPage', () => {
  let component: RafPage;
  let fixture: ComponentFixture<RafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
